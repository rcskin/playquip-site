import { render, screen } from '@testing-library/react';
import Home from '../page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders hero section with correct background', () => {
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveClass('hero', 'min-h-screen');
    expect(heroSection).toHaveStyle({
      backgroundImage: "url('/images/hero-picture.jpg')"
    });
  });

  test('renders hero overlay', () => {
    const overlay = screen.getByTestId('hero-overlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('hero-overlay', 'bg-opacity-60');
  });

  test('renders hero content with correct text', () => {
    const heroContent = screen.getByTestId('hero-content');
    expect(heroContent).toBeInTheDocument();
    expect(heroContent).toHaveClass('text-center', 'text-neutral-content');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome to Playquip');
    expect(heading).toHaveClass('mb-5', 'text-5xl', 'font-bold');

    const paragraph = screen.getByText('Premium quality playground equipment for kids of all ages.');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('mb-5');
  });

  test('renders info section with correct content', () => {
    const infoSection = screen.getByTestId('info-section');
    expect(infoSection).toBeInTheDocument();
    expect(infoSection).toHaveClass('bg-blue-900', 'text-white', 'py-12');

    const container = infoSection.querySelector('.container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('mx-auto', 'px-4');

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('About Playquip Leisure');
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'mb-4', 'text-center');

    const paragraph = screen.getByText(/Playquip Leisure is a British company/);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('text-lg', 'leading-relaxed');
  });

  test('main container has correct styling', () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('min-h-screen', 'bg-base-200');
  });

  test('hero content container has max width', () => {
    const contentContainer = screen.getByTestId('hero-content-container');
    expect(contentContainer).toBeInTheDocument();
    expect(contentContainer).toHaveClass('max-w-md');
  });
}); 