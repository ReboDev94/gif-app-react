import { getGifs } from "../../src/api/apiGifs"

describe('pruebas en apiGifs', () => {
    test('probar la respuesta del api arreglo de gifs', async () => {
        const gifs = await getGifs('one puch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})