import CardStory from "../components/cardStory";
import Header from "../components/header";
import TopStory from "../components/topStory"

function Home() {
    return (
        <div>
            <Header />
            <div className="flex bg-white gap-10 mx-20 my-10 p-10 rounded-[10px]">
                <div className="w-1/3">
                    <h1>TopStory</h1>
                    <TopStory/>
                </div>
                <div className="w-2/3">
                    <CardStory />
                </div>
            </div>
        </div>
    )
}
export default Home