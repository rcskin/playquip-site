import { render, screen, act } from '@testing-library/react';
import { WishListProvider, useWishList } from '../../context/WishListContext';
import '@testing-library/jest-dom';

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Test component to access context
function TestComponent() {
  const { WishList, addToWishList, removeFromWishList, clearWishList } = useWishList();
  
  return (
    <div>
      <div data-testid="context-value">{JSON.stringify(WishList)}</div>
      <button onClick={() => addToWishList({ slug: 'test-product', name: 'Test Product' })}>
        Add Product
      </button>
      <button onClick={() => removeFromWishList('test-product')}>
        Remove Product
      </button>
      <button onClick={clearWishList}>Clear WishList</button>
    </div>
  );
}

describe('WishListContext', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    // Reset localStorage mock implementation
    mockLocalStorage.getItem.mockImplementation(() => null);
    mockLocalStorage.setItem.mockImplementation(() => {});
    mockLocalStorage.removeItem.mockImplementation(() => {});
    mockLocalStorage.clear.mockImplementation(() => {});
  });

  test('initializes with empty wishlist', () => {
    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );
    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe('[]');
  });

  test('loads wishlist from localStorage on mount', () => {
    const mockWishList = [
      { slug: 'product-1', name: 'Product 1' },
      { slug: 'product-2', name: 'Product 2' },
    ];
    mockLocalStorage.getItem.mockImplementation(() => JSON.stringify(mockWishList));

    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );
    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe(JSON.stringify(mockWishList));
  });

  test('adds product to wishlist', () => {
    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );

    const addButton = screen.getByText('Add Product');
    
    act(() => {
      addButton.click();
    });

    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe(JSON.stringify([{ slug: 'test-product', name: 'Test Product' }]));
  });

  test('removes product from wishlist', () => {
    // Initialize with a product
    const initialWishList = [{ slug: 'test-product', name: 'Test Product' }];
    mockLocalStorage.getItem.mockImplementation(() => JSON.stringify(initialWishList));

    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );

    const removeButton = screen.getByText('Remove Product');
    
    act(() => {
      removeButton.click();
    });

    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe('[]');
  });

  test('clears entire wishlist', () => {
    // Initialize with products
    const initialWishList = [
      { slug: 'product-1', name: 'Product 1' },
      { slug: 'product-2', name: 'Product 2' },
    ];
    mockLocalStorage.getItem.mockImplementation(() => JSON.stringify(initialWishList));

    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );

    const clearButton = screen.getByText('Clear WishList');
    
    act(() => {
      clearButton.click();
    });

    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe('[]');
  });

  test('saves wishlist to localStorage on changes', () => {
    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );

    const addButton = screen.getByText('Add Product');
    
    act(() => {
      addButton.click();
    });

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'WishList',
      JSON.stringify([{ slug: 'test-product', name: 'Test Product' }])
    );
  });

  test('handles localStorage errors gracefully', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Simulate localStorage error
    mockLocalStorage.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    render(
      <WishListProvider>
        <TestComponent />
      </WishListProvider>
    );

    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe('[]');

    // Verify console.error was called
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error loading wishlist from localStorage:',
      expect.any(Error)
    );

    consoleSpy.mockRestore();
  });

  test('useWishList hook throws error when used outside provider', () => {
    function TestComponentWithoutProvider() {
      try {
        const context = useWishList();
        return <div data-testid="context-value">{JSON.stringify(context)}</div>;
      } catch (error) {
        return <div data-testid="context-value">{error.message}</div>;
      }
    }

    render(<TestComponentWithoutProvider />);
    const contextValue = screen.getByTestId('context-value');
    expect(contextValue.textContent).toBe('useWishList must be used within a WishListProvider');
  });
}); 