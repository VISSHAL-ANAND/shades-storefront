"use client";

import React, { useEffect, useRef } from "react";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import { CloseIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { IconButton } from "@/components/ui/IconButton";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Capture whatever overflow was set before we touch it.
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      // Restore the value that existed before this effect ran.
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 m-0 p-0 w-full h-full max-w-full max-h-full bg-black/60 backdrop-blur-sm z-50 border-0 overflow-hidden open:flex flex-col"
    >
      <div className="w-full max-w-sm h-full bg-shades-cream p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-shades-beige">
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-normal uppercase text-shades-charcoal">
                SHADES
              </span>
              <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-shades-stone -mt-0.5">
                Coimbatore
              </span>
            </div>
            <IconButton
              onClick={onClose}
              aria-label="Close navigation menu"
              size="md"
            >
              <CloseIcon className="w-5 h-5" />
            </IconButton>
          </div>

          <nav aria-label="Mobile primary navigation" className="mt-8">
            <ul className="flex flex-col space-y-4">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-base font-serif uppercase tracking-[0.14em] text-shades-charcoal hover:text-shades-forest transition-colors min-h-[44px]"
                  >
                    <span>{item.label}</span>
                    <ArrowRightIcon className="w-4 h-4 text-shades-stone" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-shades-beige/80">
          <p className="text-[10px] font-sans uppercase tracking-[0.16em] text-shades-stone mb-1">
            Physical Studio
          </p>
          <p className="text-xs font-sans text-shades-charcoal">
            [Store address pending client details]
          </p>
          <p className="text-[11px] font-sans text-shades-stone mt-1">
            Coimbatore, Tamil Nadu
          </p>
        </div>
      </div>
    </dialog>
  );
}
