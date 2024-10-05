import ContentTile from "../content-tile/content-tile";


export default function ContentRow({title} : {title: string }) {

    return (
        <div>
            <div className="text-2xl">{title}</div>
            {/* eventually load dynamically from input */}
            <div className="flex flex-row w-full">
                <ContentTile /> 
                <ContentTile /> 
                <ContentTile /> 
                <ContentTile /> 
            </div>
        </div>
    );
}