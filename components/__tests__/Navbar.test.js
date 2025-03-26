import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders logo', () => {
    const logo = screen.getByAltText('Playquip Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/playquip_logo.jpg');
    expect(logo).toHaveClass('h-12');
  });

  test('renders all navigation links', () => {
    const links = [
      { text: 'About Us', href: '/about' },
      { text: 'Products', href: '/products' },
      { text: 'Services', href: '/services' },
      { text: 'Designs', href: '/designs' },
      { text: 'Contact', href: '/contact' },
      { text: 'Wish List', href: '/wishlist' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  test('mobile menu toggle works correctly', () => {
    const menuButton = screen.getByRole('button');
    const menuContainer = screen.getByTestId('mobile-menu');

    // Menu should be hidden initially on mobile
    expect(menuContainer).toHaveClass('hidden');

    // Click menu button
    fireEvent.click(menuButton);

    // Menu should be visible after click
    expect(menuContainer).not.toHaveClass('hidden');

    // Click menu button again
    fireEvent.click(menuButton);

    // Menu should be hidden again
    expect(menuContainer).toHaveClass('hidden');
  });

  test('desktop menu is always visible', () => {
    const menuContainer = screen.getByTestId('mobile-menu');
    expect(menuContainer).toHaveClass('md:block');
  });

  test('Wish List is positioned correctly on desktop', () => {
    const wishListLink = screen.getByText('Wish List');
    expect(wishListLink.parentElement).toHaveClass('md:absolute', 'md:right-0');
  });
}); 