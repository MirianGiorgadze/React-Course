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

---

## 4. `useRef` Hook: DOM ელემენტებზე პირდაპირი წვდომა

React-ში, როგორც წესი, მომხმარებლის ინტერფეისის (UI) განახლებას **მდგომარეობის (State) მართვით** ვახორციელებთ. თუმცა, ზოგჯერ გვჭირდება **პირდაპირი წვდომა** დოკუმენტის ობიექტურ მოდელზე (DOM) ან რაიმე ცვლადის შენახვა, რომელიც **არ გამოიწვევს კომპონენტის განმეორებით რენდერირებას** (re-render) მისი შეცვლისას. სწორედ აქ შემოდის **`useRef`** ჰუკი.

**რისთვის გამოიყენება `useRef`?**

1.  **DOM ელემენტებზე წვდომა:** მისი ყველაზე გავრცელებული გამოყენებაა, როცა გვინდა კონკრეტულ HTML ელემენტზე (მაგალითად, `<input>`, `<button>`, `<video>`) პირდაპირი წვდომა, რომ შევცვალოთ მისი თვისებები, გამოვიძახოთ მეთოდები (მაგალითად, `focus()`, `play()`) ან გავზომოთ მისი ზომა/პოზიცია.
2.  **ცვლადის შენახვა, რომელიც არ გამოიწვევს Re-render-ს:** `useRef`-ის საშუალებით შეგვიძლია შევინახოთ ნებისმიერი ცვლადი (ობიექტი, რიცხვი, სტრიქონი), რომლის ცვლილებაც არ გვინდა კომპონენტის განმეორებით რენდერირებას იწვევდეს. ეს სასარგებლოა ისეთი მონაცემებისთვის, რომლებიც არ არის UI-ის ნაწილი, მაგრამ საჭიროა კომპონენტის სიცოცხლის ციკლის განმავლობაში.

**როგორ მუშაობს `useRef`?**

`useRef()` ბრუნებს **ცვალებად (mutable) ობიექტს**, რომელსაც აქვს ერთი თვისება: **`.current`**. ეს `.current` თვისება თავდაპირველად ინიციალიზდება იმ მნიშვნელობით, რომელსაც `useRef()`-ს გადავცემთ არგუმენტად.

* **DOM ელემენტისთვის:** როდესაც `useRef()`-ით შექმნილ რეფერენსს მივანიჭებთ JSX ელემენტის `ref` ატრიბუტს, React ავტომატურად ჩაწერს ამ DOM ელემენტის ინსტანციას `.current` თვისებაში, როდესაც კომპონენტი დამონტაჟდება (mounted).
* **ზოგადი ცვლადისთვის:** თუ არ უკავშირებთ `ref`-ს DOM ელემენტს, შეგიძლიათ უბრალოდ გამოიყენოთ `.current` თვისება თქვენი მონაცემების შესანახად და განახლებისთვის.

**მაგალითი პროექტში (`FocusInput.jsx`):**

ჩვენ შევქმენით მარტივი კომპონენტი, რომელიც აჩვენებს `useRef`-ის გამოყენებას ინფუთ ველზე ფოკუსირებისთვის ღილაკზე დაჭერით.

1.  **`src/components/FocusInput.jsx`:**
    ```jsx
    // src/components/FocusInput.jsx
    import { useRef, useEffect, useContext } from 'react';
    import { LanguageContext } from '../contexts/LanguageContext';

    function FocusInput() {
      // ვქმნით რეფერენსს input ელემენტისთვის. null არის საწყისი მნიშვნელობა.
      const inputRef = useRef(null);
      const { t } = useContext(LanguageContext); // ლოკალიზებული ტექსტების მიღება კონტექსტიდან

      // useEffect ჰუკი შეიძლება გამოყენებულ იქნას კომპონენტის დამონტაჟებისას (პირველ რენდერზე)
      // კონკრეტულ ელემენტზე ფოკუსირებისთვის, თუ ეს საჭიროა.
      // ამ მაგალითში, ფოკუსირება ხდება ღილაკზე დაჭერით.
      useEffect(() => {
        // მაგალითად, თუ გვინდოდა ავტომატური ფოკუსირება გვერდის ჩატვირთვისას:
        // if (inputRef.current) {
        //   inputRef.current.focus();
        // }
      }, []); // ცარიელი მასივი ნიშნავს, რომ ეს ეფექტი მხოლოდ ერთხელ გაეშვება

      const handleFocusClick = () => {
        // ღილაკზე დაჭერისას input-ზე ფოკუსირება useRef-ის გამოყენებით
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.style.backgroundColor = '#e0f7fa'; // ვიზუალური ეფექტი
        }
      };

      const handleBlur = () => {
        // input-დან ფოკუსის მოხსნისას ფონის ფერის სტანდარტულზე დაბრუნება
        if (inputRef.current) {
          inputRef.current.style.backgroundColor = '';
        }
      };

      return (
        <div className="focus-input-container">
          <h3>useRef მაგალითი</h3>
          <input
            type="text"
            ref={inputRef} // `ref` ატრიბუტით ვუკავშირებთ useRef-ს
            placeholder={t.enterText} // ლოკალიზებული Placeholder ტექსტი
            onBlur={handleBlur} // onBlur ივენთის დამუშავება სტილის მოსახსნელად
          />
          <button onClick={handleFocusClick}>{t.focusInput}</button>
        </div>
      );
    }

    export default FocusInput;
    ```
    ამ მაგალითში, `inputRef.current` მოგვცემს პირდაპირ წვდომას `<input type="text">` DOM ელემენტზე, რაც საშუალებას გვაძლევს გამოვიძახოთ მისი `focus()` მეთოდი ღილაკზე დაჭერისას.

## 5. `useContext` Hook: მდგომარეობის გაზიარება კომპონენტებს შორის

React-ში მონაცემების გადაცემა მშობელი კომპონენტიდან შვილზე ხდება **props**-ის საშუალებით. თუმცა, თუ გვაქვს ბევრი შვილობილი კომპონენტი და გვინდა მონაცემების გადაცემა ღრმად ჩადგმულ კომპონენტებზე (ე.წ. "Prop Drilling"), კოდი ხდება რთული და ნაკლებად წასაკითხი. **`useContext`** ჰუკი React-ის **Context API**-სთან ერთად გვთავაზობს ამ პრობლემის გადაჭრის გზას.

**რისთვის გამოიყენება `useContext`?**

`useContext` საშუალებას აძლევს კომპონენტებს, მიიღონ წვდომა **გლობალურად გაზიარებულ მდგომარეობაზე** (Global State) ან მონაცემებზე, ისე რომ არ მოხდეს მათი ხელით გადაცემა props-ის სახით ყოველ დონეზე. ეს იდეალურია ისეთი მონაცემებისთვის, რომლებიც აპლიკაციის ბევრ ნაწილს სჭირდება, მაგალითად:

* **თემა (Theme):** ღია/ბნელი თემა.
* **ენა (Language):** აპლიკაციის ენა.
* **მომხმარებლის აუთენტიკაცია:** მომხმარებლის ინფორმაცია, შესვლის სტატუსი.

**როგორ მუშაობს `useContext`?**

`useContext`-ის გამოყენება მოითხოვს 3 ძირითად ნაბიჯს:

1.  **კონტექსტის შექმნა (`createContext`):** იქმნება კონტექსტის ობიექტი `React.createContext()` მეთოდით.
    ```jsx
    // src/contexts/ThemeContext.jsx
    import { createContext } from 'react';
    export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
    ```
    ```jsx
    // src/contexts/LanguageContext.jsx
    import { createContext } from 'react';
    export const LanguageContext = createContext({ language: 'ka', toggleLanguage: () => {}, t: {} });
    ```

2.  **კონტექსტის მიწოდება (`.Provider`):** კონტექსტის ობიექტს აქვს `.Provider` კომპონენტი, რომელიც გარს ერტყმის თქვენი აპლიკაციის იმ ნაწილს, სადაც გსურთ ამ კონტექსტის მონაცემების ხელმისაწვდომობა. `value` თვისებით გადასცემთ მონაცემებს, რომელთა გაზიარებაც გსურთ.

    ```jsx
    // src/App.jsx-ის ნაწილი
    import { ThemeContext } from './contexts/ThemeContext';
    import { LanguageContext } from './contexts/LanguageContext';

    function App() {
      const [theme, setTheme] = useState('light');
      const [language, setLanguage] = useState('ka');
      const translations = { /* ... ლოკალიზებული ტექსტები ... */ };
      const t = translations[language];

      const toggleTheme = () => { /* ... */ };
      const toggleLanguage = () => { /* ... */ };

      return (
        <BrowserRouter>
          {/* ThemeContext-ის მიწოდება */}
          <ThemeContext.Provider value={{ theme, toggleTheme, t }}>
            {/* LanguageContext-ის მიწოდება */}
            <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
              <div className="App">
                {/* ... აპლიკაციის დანარჩენი ნაწილი */}
              </div>
            </LanguageContext.Provider>
          </ThemeContext.Provider>
        </BrowserRouter>
      );
    }
    ```
    აქ `App` კომპონენტი აწვდის `theme`, `toggleTheme`, `language`, `toggleLanguage` და `t` (translations) მნიშვნელობებს თავის შვილობილ კომპონენტებს.

3.  **კონტექსტის მოხმარება (`useContext`):** ნებისმიერ კომპონენტს, რომელიც მოთავსებულია `.Provider`-ის შიგნით, შეუძლია გამოიყენოს `useContext(MyContext)` ჰუკი, რათა მიიღოს წვდომა ამ კონტექსტის `value` თვისებაზე.

    ```jsx
    // src/components/ThemeSwitcher.jsx
    import { useContext } from 'react';
    import { ThemeContext } from '../contexts/ThemeContext'; // კონტექსტის იმპორტი

    function ThemeSwitcher() {
      // ვიღებთ მნიშვნელობებს ThemeContext-დან
      const { theme, toggleTheme, t } = useContext(ThemeContext); 

      return (
        <div className="theme-switcher">
          <span>{t.theme}: <span className="current-setting">{theme === 'light' ? t.light : t.dark}</span></span>
          <button onClick={toggleTheme}>
            {theme === 'light' ? t.dark : t.light} {t.theme}
          </button>
        </div>
      );
    }
    export default ThemeSwitcher;
    ```
    `LanguageSwitcher` და `Header`, `Home`, `About`, `PostList`, `PostDetail`, `PostsLayout` კომპონენტებიც ანალოგიურად იყენებენ `LanguageContext`-ს ლოკალიზებული ტექსტების მისაღებად.

`useContext` მნიშვნელოვნად ამარტივებს მონაცემთა ნაკადს კომპლექსურ აპლიკაციებში და ხელს უწყობს კოდის სისუფთავესა და მოვლას.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
