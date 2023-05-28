import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

// Tests that the Contact component renders without errors.
it('test_rendering_component', () => {
  render(<Contact />);
  expect(screen.getByText('Contact')).toBeInTheDocument();
});

// Tests that the Contact component displays the correct contact information.
it('test_display_contact_info', () => {
  render(<Contact />);
  expect(screen.getByText('Email: muchajulius@gmail.com')).toBeInTheDocument();
  expect(screen.getByText('Location: Nairobi, Kenya')).toBeInTheDocument();
});
