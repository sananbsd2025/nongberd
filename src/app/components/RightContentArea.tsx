import NewsListPage from "./Newslist";
import NewsSellListPage from "./Newssell";
import ShowGalleryPage from "./ShowGallery";

export default function RightContentAreaPage() {
    return (
        <div>
            <NewsListPage />
            <ShowGalleryPage />
            <NewsSellListPage />
        </div>
    );
}
