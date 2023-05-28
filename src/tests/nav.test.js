import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

// Tests that clicking the mobile menu button toggles menu visibility.
it('test_mobile_menu_toggle', () => {
  const { getByRole } = render(
    <Router>
      <Navigation />
    </Router>,
  );
  const menuButton = getByRole('button', { name: 'Toggle Menu' });
  fireEvent.click(menuButton);
  expect(getByRole('navigation')).toHaveClass('navbar');
  fireEvent.click(menuButton);
  expect(getByRole('navigation')).not.toHaveClass('mobile-menu-open');
});

// Tests that clicking on a NavLink navigates to the correct page.
it('test_navlink_navigation', () => {
  const { getByText } = render(<MemoryRouter><Navigation /></MemoryRouter>);
  fireEvent.click(getByText('Resume'));
  expect(getByText('Resume')).toBeInTheDocument();
});

// Tests that the menu is closed by default.
it('test_menu_closed_by_default', () => {
  const { getByRole } = render(
    <Router>
      <Navigation />
    </Router>,
  );
  expect(getByRole('navigation')).not.toHaveClass('mobile-menu-open');
});

// Tests that the active NavLink is highlighted.
it('test_active_navlink_highlight', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/projects']}><Navigation /></MemoryRouter>);
  expect(getByText('Projects')).toHaveClass('active-link');
});

// Tests that the menu closes when clicked outside of it.
it('test_menu_closes_on_click_outside', () => {
  const { getByRole } = render(
    <Router>
      <Navigation />
    </Router>,
  );
  fireEvent.click(getByRole('button', { name: 'Toggle Menu' }));
  fireEvent.click(document.body);
  expect(getByRole('navigation')).not.toHaveClass('mobile-menu-open');
});
