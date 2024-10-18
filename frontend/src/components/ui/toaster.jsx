import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('en-US', { dateStyle: 'full' });
  return (
    (<ToastProvider>
      {
        toasts.map(function ({ id, title, action, ...props }) {
          return (
            (<Toast key={id} duration={2000} {...props}>
              <div className="grid gap-2">
                {title && <ToastTitle>{title}</ToastTitle>}
                <ToastDescription>
                  {date} at {time}
                </ToastDescription>
              </div>
              {action}
              <ToastClose />
            </Toast>)
          );
        })
      }
      <ToastViewport />
    </ToastProvider>)
  );
}
