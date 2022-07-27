const { render, screen } = require("@testing-library/react");
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {
    const category = 'Saitama';

    test('debe de mostrar el loading inicialment', () => {
        useFetchGifs.mockReturnValue({
            images: [], isLoading: true
        });

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'saitma.png'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs, isLoading: false
        });

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(1);

    })

})