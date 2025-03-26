import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '../ImageGallery';
import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('ImageGallery', () => {
  const mockMainImage = '/images/main.jpg';
  const mockGalleryImages = [
    { url: '/images/gallery1.jpg' },
    { url: '/images/gallery2.jpg' },
  ];
  const mockAlt = 'Test Image';

  beforeEach(() => {
    // Reset the component before each test
    jest.clearAllMocks();
  });

  test('renders main image correctly', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const mainImage = screen.getByAltText(mockAlt);
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src', mockMainImage);
    expect(mainImage).toHaveClass('rounded-lg', 'shadow-lg', 'object-cover');
  });

  test('renders gallery thumbnails when multiple images are provided', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(4); // main image + main image thumbnail + 2 gallery images

    // Check thumbnail images
    mockGalleryImages.forEach((img, index) => {
      const thumbnail = screen.getByAltText(`${mockAlt} Thumbnail ${index + 2}`);
      expect(thumbnail).toHaveAttribute('src', img.url);
      expect(thumbnail).toHaveClass('object-cover', 'w-full', 'h-full');
    });
  });

  test('does not render thumbnails when only main image is provided', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={[]}
        alt={mockAlt}
      />
    );
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(1); // only main image
  });

  test('handles empty gallery images array', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={[]}
        alt={mockAlt}
      />
    );
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(1); // only main image
  });

  test('updates main image when thumbnail is clicked', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const thumbnails = screen.getAllByRole('img');
    const firstGalleryImage = thumbnails[2]; // Skip main image and its thumbnail

    // Click first gallery image
    fireEvent.click(firstGalleryImage.parentElement.parentElement);

    // Check if main image was updated
    const mainImage = screen.getByAltText(mockAlt);
    expect(mainImage).toHaveAttribute('src', mockGalleryImages[0].url);
  });

  test('applies correct styling to selected thumbnail', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const thumbnails = screen.getAllByRole('img');
    const firstGalleryImage = thumbnails[2]; // Skip main image and its thumbnail

    // Click first gallery image
    fireEvent.click(firstGalleryImage.parentElement.parentElement);

    // Check if selected thumbnail has correct styling
    expect(firstGalleryImage.parentElement.parentElement).toHaveClass(
      'border-blue-500',
      'shadow-md'
    );
  });

  test('applies default styling to unselected thumbnails', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const thumbnails = screen.getAllByRole('img');
    const secondGalleryImage = thumbnails[3]; // Skip main image, its thumbnail, and first gallery image

    // Check if unselected thumbnail has correct styling
    expect(secondGalleryImage.parentElement.parentElement).toHaveClass(
      'border-gray-300'
    );
  });

  test('maintains correct container dimensions', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const mainContainer = screen.getByTestId('main-image-container');
    expect(mainContainer).toHaveClass('w-full', 'max-w-[800px]', 'h-[500px]');
  });

  test('thumbnail container has correct dimensions and styling', () => {
    render(
      <ImageGallery
        mainImage={mockMainImage}
        galleryImages={mockGalleryImages}
        alt={mockAlt}
      />
    );

    const thumbnailContainers = screen.getAllByTestId('thumbnail-container');
    const firstContainer = thumbnailContainers[0];
    
    expect(firstContainer).toHaveStyle({
      width: '120px',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    });
  });
}); 