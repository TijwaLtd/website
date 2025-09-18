import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-sm text-gray-600">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <Link href={crumb.href} className="hover:underline">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
