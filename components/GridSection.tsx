import React from 'react'

interface GridSectionProps {
  title: string
  children: React.ReactNode
}

export default function GridSection({ title, children }: GridSectionProps) {
  return (
    <section className="mt-6">
      <ul className="grid gap-6 md:grid-cols-2 lg:[grid-auto-rows:628px] lg:[grid-template-columns:repeat(4,calc(25%_-_40px))] lg:[grid-template-rows:20px] lg:[gap:24px_40px]">
        <div className="col-span-1 text-gray-500 uppercase md:col-span-2 lg:col-span-4">
          <a
            href={title !== 'latest' ? `/tags/${title.toLowerCase()}` : '/tags'}
            className={title !== 'latest' ? 'text-primary-500 hover:underline' : ''}
          >
            {title}
          </a>
        </div>
        {children}
      </ul>
    </section>
  )
}
