import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Resume from '../components/Resume';

// Tests that the Resume component renders without errors.
it("test_render_resume_without_errors", () => {
    render(<Resume />);
    expect(screen.getByText('resume')).toBeInTheDocument();
});

// Tests that the component renders correctly with empty work experience or education arrays.
it("test_empty_work_experience_or_education_arrays", () => {
    const props = {
        title: 'my resume',
        sections: {
            experience: [],
            education: [
                {
                    date: '2023 - 2023',
                    title: 'full-stack software engineering',
                    institution: 'microverse'
                }
            ]
        }
    };
    render(<Resume {...props} />);
    expect(screen.getByText('resume')).toBeInTheDocument();
});