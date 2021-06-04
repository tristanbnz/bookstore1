import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import BestSellers from "../modules/bestSellers/BestSellers";
import { BrowserRouter } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import CategoryNavBar from "../modules/category/categoryNavBar/CategoryNavBar";
import SearchBar from "../modules/search/searchBar/SearchBar";
import PastPurchases from "../modules/pastPurchases/PastPurchases";




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
  
  