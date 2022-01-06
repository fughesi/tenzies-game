import React from "react"
import ReactDOM from "react-dom"
import Button from "./../Button"
import { render , cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import "@testing-library/jest-dom"


afterEach(cleanup)
it("renders without crasing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="click me"></Button>)
    expect(getByTestId("button")).toHaveTextContent("click me")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})