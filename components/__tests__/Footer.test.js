import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders company information', () => {
    const companyInfo = screen.getByText(/Playquip Ltd/);
    expect(companyInfo).toBeInTheDocument();
    expect(companyInfo).toHaveTextContent(/Registered Company Number: 2826786/);
    expect(companyInfo).toHaveTextContent(/VAT Registration Number: 623166067/);
  });

  test('renders company logo SVG', () => {
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe('svg');
    expect(svg).toHaveAttribute('width', '50');
    expect(svg).toHaveAttribute('height', '50');
    expect(svg).toHaveClass('fill-current');
  });

  test('renders company navigation links', () => {
    const companyLinks = [
      { text: 'About Us', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ];

    companyLinks.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveClass('link', 'link-hover');
    });
  });

  test('renders legal navigation links', () => {
    const legalLinks = [
      { text: 'Terms of Use', href: '/terms' },
      { text: 'Privacy Policy', href: '/privacy' },
    ];

    legalLinks.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveClass('link', 'link-hover');
    });
  });

  test('renders section titles', () => {
    const titles = ['Company', 'Legal'];
    titles.forEach(title => {
      const heading = screen.getByText(title);
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('footer-title');
    });
  });

  test('footer has correct styling', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('footer', 'bg-base-200', 'text-base-content', 'p-10');
  });
}); 