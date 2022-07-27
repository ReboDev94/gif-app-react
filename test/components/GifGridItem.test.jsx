import { render, screen } from "@testing-library/react"

describe('pruebas en GifGridItem.jsx', () => {

    const img = {
        id: 'gk3R16JhLP8RUka2nD',
        title: 'Count Me In Rick And Morty GIF',
        url: 'https://media0.giphy.com/media/gk3R16JhLP8RUka2nD/giphy.gif?cid=687a5183yndu0bjk14vb9vwskbrg5q2a6pjcib7jjd85ey9i&rid=giphy.gif&ct=g'
    }

    test('hace match con el snapshot', () => {
        const { container } = render(<GifGridItem img={img} />)
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar con el url y el ALT indicado', () => {
        render(<GifGridItem img={img} />)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(img.url)
        expect(alt).toBe(img.title)
    })
    test('debe haber un titulo en la imagen', () => {
        render(<GifGridItem img={img} />)
        expect(screen.getByText(img.title)).toBeTruthy()
    })
})
