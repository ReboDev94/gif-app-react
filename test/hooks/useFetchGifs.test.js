import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Saitama'));

        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy()
    })

    test('debe retornar un arreglo de images y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Saitama'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        )
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy()
    })

    
})