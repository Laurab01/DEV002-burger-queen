import { render, screen } from "@testing-library/react";
import Home from './Home';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('switch router', () => {
    it('render Home', () =>{
        render(<Home/>, {wrapper: BrowserRouter})
        expect(screen.getByText(/MESERO/i)).toBeInTheDocument()
    })
});