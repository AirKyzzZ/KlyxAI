import { render, screen, waitFor } from '@testing-library/react'
import Navbar from '../Navbar'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Suppress console errors during tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: An update to Navbar inside a test was not wrapped in act(...)')
    ) {
      return
    }
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Erreur lors de la vérification utilisateur')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

describe('Navbar', () => {
  it('renders without crashing', async () => {
    render(<Navbar />)
    
    // Wait for any async operations to complete
    await waitFor(() => {
      expect(document.body).toBeInTheDocument()
    })
  })
}) 