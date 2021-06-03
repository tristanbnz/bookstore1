import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import BestSellers from "../modules/bestSellers/BestSellers";
import { BrowserRouter } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import CategoryNavBar from "../modules/category/categoryNavBar/CategoryNavBar";
import SearchBar from "../modules/search/searchBar/SearchBar";




it("bestsellers top 20 heading", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<BestSellers />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
    <SearchBar />, <CategoryNavBar />, <div><div className="well-bs no-radius"><div className="container-category"><h3>Top 20 best sellers</h3></div><div className="loader" /></div></div>
    //<Subcomponent foo="bar" />
    ]);
});
  
//   it("renders Account header", () => {
//     const wrapper = shallow(<App />);
//     const welcome = <h1>Display Active Users Account Details</h1>;
//     expect(wrapper.contains(welcome)).toEqual(true);
//   });




// describe('App', function () {
//    it('Should have Top 20 best sellers as heading ', function () {
//        let container = document.createElement('div');
//        document.body.appendChild(container);
//        act(() => {
//            ReactDOM.render( <BrowserRouter>
//             <BestSellers />
//           </BrowserRouter>, container);
//        })

       
//        const header = container.getElementsByClassName('container-category');
//        expect(container.textContent).toBe("Top 20 best sellers")

//        ReactDOM.unmountComponentAtNode(container);

//     //    expect(
//     //     container.containsMatchingElement(
//     //       <span>I am groot</span>
//     //     )
//     //   ).toBeTruthy()

//    });
// });



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
