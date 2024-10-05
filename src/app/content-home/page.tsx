import ContentRow from "@/components/content-row/content-row";


export default function ContentList() {
    return (
        <section className="w-full flex flex-col gap-4" style={{'border': 'thin solid red'}}>
            <ContentRow title="Continue Playing" />
            <ContentRow title="Latest Games" />
            <ContentRow title="Continue Watching" />
            <ContentRow title="Latest Videos" />
        </section>
    );
}