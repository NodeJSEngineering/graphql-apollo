query-
{
  books {
    title
    author
  }
}

with arguments- NW
{
  books(title: "The Great Gatsby") {
    title
    author
  }
}