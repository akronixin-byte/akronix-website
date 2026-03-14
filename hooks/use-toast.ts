"use client";

import { useState, useCallback } from "react";

type ToastType = "default" | "destructive";

interface ToastProps {
  title: string;
  description?: string;
  variant?: ToastType;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(({ title, description, variant = "default" }: ToastProps) => {
    // In a real app, you'd use a context provider or a library like sonner/shadcn
    // Here we'll just log and alert for now, but mock the API
    console.log(`TOAST: [${variant.toUpperCase()}] ${title}: ${description}`);
    
    // Simple UI alert as fallback
    if (typeof window !== "undefined") {
      alert(`${title}\n${description || ""}`);
    }
  }, []);

  return { toast, toasts };
}
