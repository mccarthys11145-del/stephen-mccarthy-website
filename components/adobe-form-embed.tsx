'use client'

import { useEffect, useRef } from 'react'

const ADOBE_FORM_SRC =
  'https://na2.documents.adobe.com/public/embeddedWidget?wid=CBFCIBAA3AAABLblqZhC815iiZKZxDWFiOl3EVakcTEHcwRoPNkFv9qCZxLa9ROP9w9CRoA44CYkKWqTfGVs*'

export default function AdobeFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    container.innerHTML = ''

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = ADOBE_FORM_SRC

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-[720px] w-full rounded-lg border border-gray-200 bg-white p-4 shadow-inner"
      aria-label="New peptide therapy patient form"
    />
  )
}
