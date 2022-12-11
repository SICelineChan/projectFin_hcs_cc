import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import travelplcs from "./travelplcs.json";

export default function NextBlog() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let blog = travelplcs[index];
  return (
    <>
      <div>
        <main className="container">
          <div className="p-4 p-md-5 mb-4 text-bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">Blog Posts</h1>
              <h2>
                <i>{blog.country} </i>
                and the name of the city is {blog.city}
              </h2>
              <p className="lead my-3"></p>
            </div>
          </div>
          <button onClick={handleNextClick}>Next</button>

          <h3>
            ({index + 1} of {travelplcs.length})
          </h3>
          <button onClick={handleMoreClick}>
            {showMore ? "Hide" : "Show"} details
          </button>
          {showMore && <p>{blog.visitdate}</p>}
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    Explore
                  </strong>
                  <h3 className="mb-0">{blog.country}</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="/blog/:{id}" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Features</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    What's new?
                  </strong>
                  <h3 className="mb-0">{blog.city}</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                From the Firehose
              </h3>

              <article className="blog-post">
                <h2 className="blog-post-title mb-1">Sample blog post</h2>
                <p className="blog-post-meta">
                  January 1, 2021 by <a href="/about">{blog.author}</a>
                </p>

                <p>
                  This blog post shows a few different types of content that’s
                  supported and styled with Bootstrap. Basic typography, lists,
                  tables, images, code, and more are all supported as expected.
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h2>Blockquotes</h2>
                <p>This is an example blockquote in action:</p>
                <blockquote className="blockquote">
                  <p>Quoted text goes here.</p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Example lists</h3>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout. This is an example unordered list:
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>And this is an ordered list:</p>
                <ol>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ol>
                <p>And this is a definition list:</p>
                <dl>
                  <dt>HyperText Markup Language (HTML)</dt>
                  <dd>
                    The language used to describe and define the content of a
                    Web page
                  </dd>
                  <dt>Cascading Style Sheets (CSS)</dt>
                  <dd>Used to describe the appearance of Web content</dd>
                  <dt>JavaScript (JS)</dt>
                  <dd>
                    The programming language used to build advanced Web sites
                    and applications
                  </dd>
                </dl>
                <h2>Inline HTML elements</h2>

                <p>
                  Most of these elements are styled by browsers with few
                  modifications on our part.
                </p>
                <h2>Heading</h2>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
              </article>

              <article className="blog-post">
                <h2 className="blog-post-title mb-1">Another blog post</h2>
                <p className="blog-post-meta">
                  December 23, 2020 by <a href="/about">{blog.author}</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <blockquote>
                  <p>
                    Longer quote goes here, maybe with some{" "}
                    <strong>emphasized text</strong> in the middle of it.
                  </p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>

                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <article className="blog-post">
                <h2 className="blog-post-title mb-1">New feature</h2>
                <p className="blog-post-meta">
                  December 14, 2022 by <a href="/about">{blog.author}</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <nav className="blog-pagination" aria-label="Pagination">
                <a className="btn btn-outline-primary rounded-pill" href="/">
                  Older
                </a>
                {/* <a className="btn btn-outline-secondary rounded-pill disabled">
                  Newer
                </a> */}
              </nav>
            </div>

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">Guest Author</h4>
                  <Container className="my-5 d-flex justify-content-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                      className="rounded-3"
                      style={{ width: "150px" }}
                      alt="Avatar"
                    />
                  </Container>
                  <p className="mb-0">
                    Customize this section to tell your visitors a little bit
                    about your publication, writers, content, or something else
                    entirely. Totally up to you.
                  </p>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Archives</h4>
                  <ol className="list-unstyled mb-0">
                    <li>
                      <a href="/">March 2021</a>
                    </li>
                    <li>
                      <a href="/">February 2021</a>
                    </li>
                  </ol>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Elsewhere</h4>
                  <ol className="list-unstyled">
                    <li>
                      <a href="/">GitHub</a>
                    </li>
                    <li>
                      <a href="/">Twitter</a>
                    </li>
                    <li>
                      <a href="/">Facebook</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
