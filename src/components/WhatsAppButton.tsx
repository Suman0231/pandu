interface Props { phone: string }
export default function WhatsAppButton({ phone }: Props) {
  const url = `https://wa.me/${phone}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:scale-105 transition"
    >
      <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
        <path fill="currentColor" d="M19.11 17.46c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.96-.15.17-.3.19-.55.07-.25-.13-1.06-.39-2.03-1.25-.75-.66-1.25-1.47-1.4-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.36-.78-1.86-.21-.5-.42-.42-.57-.42h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.76 4.39 3.86.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.49-.3zM16.01 4C9.93 4 5 8.93 5 15.01c0 2.58.98 4.94 2.58 6.74L6 28l6.4-1.67c1.7.93 3.66 1.46 5.61 1.46 6.08 0 11.01-4.93 11.01-11.01C29.02 8.93 24.09 4 16.01 4z"/>
      </svg>
    </a>
  )
}
