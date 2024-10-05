import ContentTile from '@/components/content-tile/content-tile'

export default function ContentList() {
    return (
        <section className="w-full" style={{'border': 'thin solid red'}}>
            <div className="flex flex-row w-full">
                <ContentTile /> 
                <ContentTile /> 
                <ContentTile /> 
                <ContentTile /> 
            </div>
        </section>
    );
}