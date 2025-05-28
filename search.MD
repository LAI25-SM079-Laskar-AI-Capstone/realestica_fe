To implement a **search functionality** that redirects the user to a results page with a query parameter like `/result?query_search='what i search'`, we need to:

---

### ✅ 1. **Update `HousePages` Component**

We’ll add a **search input**, a **submit handler**, and use `useNavigate` from `react-router-dom` to redirect to the results page with the query in the URL.

---

#### 📝 Updated Imports

Make sure to import `useNavigate`:

```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this
```

---

#### 🧠 Add State and Navigation Logic

Inside your `HousePages` component, define:

```tsx
const navigate = useNavigate();
const [searchQuery, setSearchQuery] = useState('');
```

And create a handler for the form submission:

```tsx
const handleSearchSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const trimmedQuery = searchQuery.trim();
  if (trimmedQuery) {
    navigate(`/result?query_search=${encodeURIComponent(trimmedQuery)}`);
  }
};
```

---

#### 🖼️ Add Search Form to JSX

Place this somewhere appropriate in your layout (e.g., near the title):

```tsx
<form onSubmit={handleSearchSubmit} className="mb-8 flex justify-center">
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search properties..."
    className="px-4 py-2 border rounded-l-md focus:outline-none"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
  >
    Search
  </button>
</form>
```

---

### ✅ 2. **Create the `ResultPage` Component**

This component will read the query from the URL and fetch/display search results.

#### 📄 `ResultPage.tsx` or `ResultPage.jsx`

```tsx
import { useSearchParams } from "react-router-dom";
import PropertyList from "../features/house/components/houseList";
import useProperties from "../features/house/hooks/useProperties";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query_search") || "";

  // Fetch properties using the query
  const { houses } = useProperties({ query });

  return (
    <main className="max-w-[1100px] mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        <PropertyList data={houses} />
      </article>
    </main>
  );
};

export default ResultPage;
```

---

### ✅ 3. **Set Up Route for `/result`**

If you're using `react-router-dom`, make sure to define the route in your app's routing configuration.

#### 📁 Example in `App.tsx` or `routes.tsx`

```tsx
import ResultPage from "./pages/ResultPage";

// ...

<Routes>
  <Route path="/result" element={<ResultPage />} />
  <Route path="/" element={<HousePages />} />
</Routes>
```

---

### ✅ 4. **Update `useProperties` to Support Search Query**

Ensure your `useProperties` hook accepts a `query` parameter and passes it to the backend API for filtering results.

#### 📁 Example Hook Update (`useProperties.ts`)

```ts
export default function useProperties({ query = "", property_type = "", limit = 0, offset = 0 }) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `/api/properties?query=${encodeURIComponent(query)}&property_type=${property_type}&limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, [query, property_type, limit, offset]);

  return { houses };
}
```

---

### ✅ 5. **Summary**

| Step | Description |
|------|-------------|
| 1 | Add a search input and form to `HousePages` |
| 2 | Use `useNavigate` to redirect to `/result?query_search=...` |
| 3 | Create `ResultPage` to read the query and display results |
| 4 | Define `/result` route in `react-router` |
| 5 | Update `useProperties` to support search query filtering |

---

### 🧪 Example

If the user types `"apartment near mall"` in the search input and submits, they will be redirected to:

```
/result?query_search=apartment%20near%20mall
```

And the `ResultPage` will fetch and display properties matching that query.

---

Let me know if you need help with filtering logic on the backend or enhancing the UI!