'use client';

import { useEffect } from 'react';

/**
 * GoogleTranslateFix — Fix #5 (DOM Patch)
 * 
 * Google Translate wraps text nodes in <font> tags, which breaks React's
 * virtual DOM reconciliation. When React tries to removeChild or insertBefore
 * on a node that Google Translate has moved, it throws:
 * 
 *   "Failed to execute 'removeChild' on 'Node': 
 *    The node to be removed is not a child of this node."
 * 
 * This component patches Node.prototype.removeChild and insertBefore
 * to gracefully handle the mismatch instead of crashing the entire app.
 */
export default function GoogleTranslateFix() {
  useEffect(() => {
    // Only patch in the browser
    if (typeof window === 'undefined') return;

    // Store original methods
    const originalRemoveChild = Node.prototype.removeChild;
    const originalInsertBefore = Node.prototype.insertBefore;

    // Patch removeChild
    Node.prototype.removeChild = function (child) {
      if (child.parentNode !== this) {
        // Google Translate has moved this node — handle gracefully
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            '[GoogleTranslateFix] removeChild: node was moved by a browser extension (likely Google Translate). Handled gracefully.',
            { parent: this, child }
          );
        }
        // Try to remove from actual parent, or just return the child
        try {
          if (child.parentNode) {
            return child.parentNode.removeChild(child);
          }
        } catch (e) {
          // If all else fails, just return the child without crashing
        }
        return child;
      }
      return originalRemoveChild.call(this, child);
    };

    // Patch insertBefore
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        // Google Translate moved the reference node
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            '[GoogleTranslateFix] insertBefore: reference node was moved by a browser extension (likely Google Translate). Handled gracefully.',
            { parent: this, newNode, referenceNode }
          );
        }
        // Just append the new node instead
        return originalInsertBefore.call(this, newNode, null);
      }
      return originalInsertBefore.call(this, newNode, referenceNode);
    };

    // Cleanup — restore originals on unmount
    return () => {
      Node.prototype.removeChild = originalRemoveChild;
      Node.prototype.insertBefore = originalInsertBefore;
    };
  }, []);

  return null; // This component renders nothing
}
