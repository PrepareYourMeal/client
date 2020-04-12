import React, { Component } from "react";

class Pagination extends Component {
  state = {};

  _createPages = size => {
    let x = [];
    for (let i = 0; i < size; ++i) x[i] = i + 1;
    return x;
  };

  render() {
    const { currentIndex, total, onUpdate, listPageView } = this.props;
    const pages = this._createPages(Math.ceil(total / listPageView));
    return (
      <div className="pagination-container masonry">
        <nav className="pagination">
          <ul>
            {pages.map((pageNumber, pageIndex) => (
              <li key={pageIndex}>
                <a
                  href="/#"
                  onClick={e => {
										e.preventDefault();
										onUpdate(pageIndex);
									}}
                  className={pageIndex === currentIndex ? "current-page" : ""}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="pagination-next-prev">
          <ul>
            <li>
              <a href="/#" onClick={e => {
								e.preventDefault();
								if (currentIndex > 0) {
									onUpdate(currentIndex-1);
								}
							}} className="prev" />
            </li>
            <li>
              <a href="/#" onClick={e => {
								e.preventDefault();
								if (currentIndex < total-1) {
									onUpdate(currentIndex+1);
								}
							}} className="next" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
