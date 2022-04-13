// 4c
import Bonus from "../bonus/Bonus"

// 1a
function Exercise({good= `Great`, bad=`Not Great`}) { // 3b % 3d
    return (
        // 2a
        <div>
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* 4c */}
            <Bonus />
        </div>
    );
}

// 1b
export default Exercise;