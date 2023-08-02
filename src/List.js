import React from "react";

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <>
                        <article key={id} className="person">
                            <img src="{img}" alt="" />
                        </article>
                    </>
                );
            })}
        </>
    );
};

export default List;
