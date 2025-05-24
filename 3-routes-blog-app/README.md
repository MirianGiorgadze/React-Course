# React Vite + React Router: დეტალური ტუტორიალი

ეს ტუტორიალი დაგეხმარებათ შექმნათ მინიმალისტური ბლოგის აპლიკაცია React-ით, Vite-ით და React Router-ით. ჩვენ განვიხილავთ ყველა ძირითად კონცეფციას, მათ შორის **Nested Routes**-ის იმპლემენტაციას.

---

## შესავალი: რა არის როუტინგი ვებ-აპლიკაციებში?

ვებ-აპლიკაციებში **როუტინგი** (Routing) არის პროცესი, რომელიც განსაზღვრავს, თუ რომელი კონტენტი ან გვერდი უნდა გამოჩნდეს მომხმარებლისთვის **URL-ის მიხედვით**. მარტივად რომ ვთქვათ, როდესაც მომხმარებელი გადადის სხვადასხვა მისამართზე (მაგალითად, `www.myblog.com/about` ან `www.myblog.com/posts`), როუტინგი უზრუნველყოფს შესაბამისი კონტენტის ჩატვირთვას.

**ტრადიციულ ვებ-აპლიკაციებში** (რომლებიც არ არის Single Page Application - SPA), ყოველ ახალ URL-ზე გადასვლა ნიშნავს სერვერიდან ახალი HTML გვერდის გამოთხოვას, რაც იწვევს მთელი გვერდის გადატვირთვას. ეს შეიძლება იყოს ნელი და მომხმარებლისთვის არც თუ ისე სასიამოვნო.

**Single Page Applications (SPAs)**-ში, როგორიცაა React-ით აგებული აპლიკაციები, როუტინგი ხდება **კლიენტის მხარეს** JavaScript-ის გამოყენებით. ეს ნიშნავს, რომ გვერდი არ გადაიტვირთება მთლიანად. როდესაც URL იცვლება, JavaScript იღებს შესაბამის კომპონენტს და ახდენს მის რენდერირებას არსებულ გვერდზე, რაც უზრუნველყოფს სწრაფ და გლუვ ნავიგაციას, თითქოს აპლიკაცია "ცოცხლდება" ბრაუზერში.

---

## რა არის React Router და რატომ გვჭირდება ის?

**React Router** არის ყველაზე პოპულარული და ძლიერი ბიბლიოთეკა React-ში კლიენტის მხარის როუტინგის იმპლემენტაციისთვის. ის არ არის React-ის ნაწილი, მაგრამ არის ცალკეული, საზოგადოების მიერ შექმნილი ინსტრუმენტი, რომელიც იდეალურად ერწყმის React-ის დეკლარაციულ ბუნებას.

**რატომ გვჭირდება React Router?**

1.  **SPA გამოცდილება:** ის საშუალებას აძლევს თქვენს React აპლიკაციას იმუშაოს როგორც Single Page Application-მა, რაც ნიშნავს გვერდის გადატვირთვის გარეშე ნავიგაციას. ეს მნიშვნელოვნად აუმჯობესებს მომხმარებლის გამოცდილებას, ხდის აპლიკაციას უფრო სწრაფს და რეაგირებადს.
2.  **დეკლარაციული სინტაქსი:** React-ის მსგავსად, React Router-ის გამოყენება არის დეკლარაციული. ეს ნიშნავს, რომ თქვენ აღწერთ, თუ როგორი უნდა იყოს თქვენი UI სხვადასხვა URL-ზე, ნაცვლად იმისა, რომ ზუსტი ნაბიჯები დაწეროთ, თუ როგორ უნდა განახლდეს ის.
3.  **URL-ის სინქრონიზაცია:** ის უზრუნველყოფს URL-ის სინქრონიზაციას აპლიკაციის მდგომარეობასთან. როდესაც მომხმარებელი ბრაუზერში უკან ან წინ ღილაკებს აჭერს, React Router სწორ კომპონენტს აჩვენებს.
4.  **მოქნილობა და მძლავრი ფუნქციები:** React Router გთავაზობთ მრავალ ფუნქციას, როგორიცაა:
    * **URL-ის პარამეტრების გადაცემა:** დინამიური მონაცემების გადაცემა URL-ის საშუალებით (მაგალითად, `/users/123`).
    * **ჩადგმული (Nested) როუტები:** აპლიკაციის კომპლექსური სტრუქტურის ორგანიზება.
    * **პროგრამული ნავიგაცია:** ნავიგაციის მართვა JavaScript კოდიდან (მაგალითად, ფორმის გაგზავნის შემდეგ სხვა გვერდზე გადასვლა).
    * **ქვირი სთრინგების (Query Strings) მართვა:** URL-ში პარამეტრების (მაგალითად, `?name=John&age=30`) წაკითხვა და მართვა.

მოკლედ, React Router არის ხიდი თქვენს React კომპონენტებსა და ბრაუზერის URL-ს შორის, რაც საშუალებას გაძლევთ ააგოთ სრულფასოვანი, დინამიური და მომხმარებელზე ორიენტირებული ვებ-აპლიკაციები.

## ძირითადი კომპონენტები

* **BrowserRouter**: ეს არის მთავარი როუტერის კომპონენტი, რომელიც იყენებს HTML5 History API-ს URL-ის სინქრონიზაციისთვის. როგორც წესი, ეს არის საუკეთესო არჩევანი ვებ-აპლიკაციებისთვის. ის უნდა მოიცავდეს თქვენი აპლიკაციის მთელ ნაწილს, სადაც გსურთ როუტინგი.

* **Routes**: ეს კომპონენტი გამოიყენება `Route`-ების კოლექციის დასაჯგუფებლად. ის ირჩევს პირველ `Route`-ს, რომელიც ემთხვევა მიმდინარე URL-ს და ახდენს მის რენდერირებას.

* **Route**: ეს კომპონენტი განსაზღვრავს კონკრეტულ მარშრუტს. ის იღებს ორ ძირითად თვისებას:
    * `path`: URL-ის ნიმუში, რომელზეც ეს `Route` უნდა დაემთხვეს.
    * `element`: React კომპონენტი, რომელიც უნდა გამოჩნდეს, როდესაც `path` დაემთხვევა.

* **Link**: ეს კომპონენტი გამოიყენება ნავიგაციისთვის. ის რენდერდება როგორც HTML `<a/>` ტეგი, მაგრამ React Router-ის წყალობით ის ხელს უშლის გვერდის სრულად გადატვირთვას.

* **useNavigate Hook**: ეს Hook საშუალებას გაძლევთ პროგრამულად განახორციელოთ ნავიგაცია, მაგალითად, ფორმის გაგზავნის შემდეგ ან ღილაკზე დაჭერით.

* **useParams Hook**: ეს Hook საშუალებას გაძლევთ მიიღოთ URL-ის პარამეტრები (მაგალითად, `/users/:id` შემთხვევაში, `id`-ის მნიშვნელობა).
---

## 1. პროექტის ინიციალიზაცია (Vite)

**Vite** არის თანამედროვე Build Tool, რომელიც უზრუნველყოფს ძალიან სწრაფ განვითარების გამოცდილებას React აპლიკაციებისთვის.

1.  **პროექტის შექმნა:**
    გახსენით თქვენი ტერმინალი და გაუშვით შემდეგი ბრძანება:
    ```bash
    npm create vite@latest my-blog-app -- --template react
    ```
    ეს შექმნის ახალ React პროექტს `my-blog-app` საქაღალდეში.

2.  **საქაღალდეში გადასვლა:**
    ```bash
    cd my-blog-app
    ```

3.  **დამოკიდებულებების ინსტალაცია:**
    ```bash
    npm install
    ```

4.  **პროექტის გაშვება (განვითარების რეჟიმში):**
    ```bash
    npm run dev
    ```
    თქვენი აპლიკაცია ხელმისაწვდომი იქნება `http://localhost:5173/` (ან მსგავს მისამართზე).

---

## 2. React Router-ის ინსტალაცია და საბაზისო კონფიგურაცია

1.  **ინსტალაცია:**
    ```bash
    npm install react-router-dom@6
    ```

2.  **`BrowserRouter`-ის გამოყენება:**
    `src/App.jsx` ფაილში, შემოახვიეთ თქვენი აპლიკაციის ძირითადი ნაწილი **`BrowserRouter`**-ში.

    ```jsx
    // src/App.jsx-ის ნაწილი
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    // ... სხვა იმპორტები

    function App() {
      return (
        <BrowserRouter>
          {/* ... თქვენი აპლიკაციის შიგთავსი, რომელიც მოიცავს Header-ს და Routes-ს */}
        </BrowserRouter>
      );
    }
    ```

3.  **`Routes` და `Route` კომპონენტები:**
    **`Routes`** კომპონენტი გამოიყენება **`Route`**-ების კოლექციის დასაჯგუფებლად.
    **`Route`** კომპონენტი განსაზღვრავს კონკრეტულ მარშრუტს.

    ```jsx
    // src/App.jsx-ის ნაწილი
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    // ... სხვა იმპორტები (Home, About, NotFound)

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> {/* ეს არის "catch-all" Route 404 გვერდისთვის */}
          </Routes>
        </BrowserRouter>
      );
    }
    ```

4.  **`Link` კომპონენტი ნავიგაციისთვის:**
    **`Link`** კომპონენტი გამოიყენება აპლიკაციის შიგნით ნავიგაციისთვის.

    ```jsx
    // მაგალითი Header.jsx-დან
    import { Link } from 'react-router-dom';

    <Link to="/" className="brand-link">მთავარი</Link>
    ```

5.  **`useParams` Hook (URL პარამეტრების მისაღებად):**
    **`useParams`** Hook საშუალებას გაძლევთ მიიღოთ დინამიური სეგმენტები URL-დან.

    ```jsx
    // src/components/PostDetail.jsx-ის ნაწილი
    import { useParams } from 'react-router-dom';

    function PostDetail() {
      const { id } = useParams(); // იღებს 'id'-ს URL-დან (მაგალითად, /posts/123 -> id = "123")
      // ... გამოიყენეთ id პოსტის მონაცემების მოსაძებნად
    }
    ```

---

## 3. Nested Routes (ჩადგმული მარშრუტები)

**Nested Routes**-ები React Router-ში საშუალებას გაძლევთ მოაწყოთ თქვენი აპლიკაციის UI უფრო იერარქიულად. ერთი მშობელი მარშრუტის ქვეშ შეიძლება არსებობდეს მრავალი შვილობილი მარშრუტი, რომლებიც რენდერდება მშობლის კომპონენტის შიგნით.

**კონცეფცია:**

* **მშობელი `Route`**: ეს არის `Route`, რომელიც შეიცავს სხვა `Route`-ებს. მისი `element` კომპონენტი (მაგალითად, `PostsLayout` ჩვენს მაგალითში) უნდა შეიცავდეს **`<Outlet />`** კომპონენტს.
* **`<Outlet />`**: ეს კომპონენტი არის Placeholder. ის მიუთითებს, თუ სად უნდა მოხდეს შვილობილი მარშრუტის კომპონენტის რენდერირება მშობელი კომპონენტის UI-ში.
* **შვილობილი `Route`-ები**: განისაზღვრება მშობელი `Route`-ის შიგნით. მათი `path` შეიძლება იყოს შედარებითი (არ იწყება `/`-ით) მშობლის `path`-თან.
* **`index` Route**: სპეციალური შვილობილი `Route`. ის გამოიყენება მშობელი მარშრუტის ნაგულისხმევი შვილობილი კომპონენტის დასადგენად, როდესაც URL ზუსტად ემთხვევა მშობლის `path`-ს.

**მაგალითი პროექტში:**

ჩვენს ბლოგის აპლიკაციაში გვაქვს `/posts` მარშრუტი, რომლის ქვეშაც გვაქვს პოსტების სია და კონკრეტული პოსტის დეტალების გვერდი.

1.  **`src/components/PostsLayout.jsx` (მშობელი კომპონენტი):**
    ```jsx
    // src/components/PostsLayout.jsx
    import { Outlet } from 'react-router-dom';

    function PostsLayout() {
      return (
        <div className="posts-layout-container">
          <nav className="sidebar">
            <h2>კატეგორიები</h2>
            <ul>
              <li><a href="#">ყველა პოსტი</a></li>
              {/* ... სხვა კატეგორიები */}
            </ul>
          </nav>
          <div className="content-area card-container">
            <Outlet /> {/* აქ გამოჩნდება PostList ან PostDetail */}
          </div>
        </div>
      );
    }

    export default PostsLayout;
    ```

2.  **`src/App.jsx` (Nested Routes-ის კონფიგურაცია):**
    `App.jsx`-ში ვახდენთ Nested Routes-ის კონფიგურაციას `PostsLayout`-ის შიგნით.

    ```jsx
    // src/App.jsx-ის ნაწილი
    import PostsLayout from './components/PostsLayout';
    import PostDetail from './components/PostDetail';
    import PostList from './components/PostList';

    // ...

    <Routes>
      {/* ... სხვა Route-ები */}
      
      <Route path="/posts" element={<PostsLayout />}>
        {/* Index Route - /posts-ზე გადასვლისას აჩვენებს PostList-ს */}
        <Route index element={<PostList />} /> 
        {/* Nested Route - /posts/:id-ზე გადასვლისას აჩვენებს PostDetail-ს */}
        <Route path=":id" element={<PostDetail />} /> 
      </Route>

      {/* ... 404 Route */}
    </Routes>
    ```
    * როდესაც URL არის `/posts`, `PostsLayout` რენდერდება და მის `Outlet`-ში გამოჩნდება **`PostList`** (რადგან `index` route ემთხვევა).
    * როდესაც URL არის `/posts/1`, `PostsLayout` კვლავ რენდერდება, მაგრამ მის `Outlet`-ში გამოჩნდება **`PostDetail`** კომპონენტი, რომელსაც ექნება `id` პარამეტრი (ამ შემთხვევაში `1`).

3.  **ნავიგაცია Nested Routes-ში:**
    * `PostList`-დან `PostDetail`-ზე გადასასვლელად, `Link`-ის `to` თვისებაში გამოიყენება მხოლოდ ID:

        ```jsx
        <Link to={`${post.id}`}> {/* ლინკი მიდის /posts/1, /posts/2 და ა.შ. */}
          {/* ... */}
        </Link>
        ```
        ეს მუშაობს იმიტომ, რომ `PostList` უკვე რენდერდება `/posts` მარშრუტის კონტექსტში და `Link` კომპონენტი ავტომატურად ამატებს მშობელი მარშრუტის პრეფიქსს.

---

## 4. პროექტის გაშვება და შემოწმება

1.  **დარწმუნდით, რომ ყველა დამოკიდებულება დაინსტალირებულია:**
    ```bash
    npm install
    ```

2.  **გაუშვით განვითარების სერვერი:**
    ```bash
    npm run dev
    ```

3.  **გახსენით ბრაუზერში:**
    გადადით `http://localhost:5173/` (ან თქვენი კონსოლის მიერ მითითებულ მისამართზე).

**შეამოწმეთ შემდეგი გვერდები:**

* **`/` (მთავარი გვერდი):** უნდა ნახოთ მისალმება.
* **`/posts` (პოსტების სია):** უნდა ნახოთ პოსტების სია (ეს არის `PostList` კომპონენტი `PostsLayout`-ის შიგნით).
* **`/posts/1` (კონკრეტული პოსტი):** უნდა ნახოთ პირველი პოსტის დეტალები. სცადეთ სხვა ID-ებიც (2, 3, 4).
* **`/about` (ჩვენს შესახებ):** უნდა ნახოთ ინფორმაცია ბლოგის შესახებ.
* **`/non-existent-page` (არარსებული გვერდი):** უნდა ნახოთ 404 გვერდი.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
