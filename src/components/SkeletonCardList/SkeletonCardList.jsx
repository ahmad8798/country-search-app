import CardList from "../CardList/CardList"
import SkeletonCard from "../CardSkeleton/SkeletonCard"

const SkeletonCardList = ({count}) => {
  return (
        <>
            <CardList>
                    {
                        Array.from({length:count}).map((_,index)=>(<SkeletonCard key={index}/>))
                    }
            </CardList>
        </>
  )
}

export default SkeletonCardList
