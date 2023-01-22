import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";


const SectionBar = observer( () => {
    const {book} = useContext(Context)
    return( 
            <ListGroup >
                {book.sections.map(section =>
                    <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={section.id === book.selectedSection.id}
                    onClick={() => book.setSelectedSection(section)}
                    key={section.id}>
                        {section.name}
                    </ListGroup.Item>
                )}
             </ListGroup> 
    )
})

export default SectionBar