import { render } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('pruebas en GifExpertApp', () => {

    test('debe hacer snapshot', () => {
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
    })

})