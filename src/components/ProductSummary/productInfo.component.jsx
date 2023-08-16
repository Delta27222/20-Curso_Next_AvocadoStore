import React from 'react'
import { Table } from 'semantic-ui-react'

export const ProductInfoComponent = ({ description, ...otherAttributes}) => {

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className=' mb-3'>
        <h3>About this avocado</h3>
        <p>{description}</p>
      </div>
      <div className='my-3 w-[100%]'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(otherAttributes).map((key) => (
            <Table.Row key={key}>
              <Table.Cell className="attr-name capitalize">{key}</Table.Cell>
              <Table.Cell>
                {otherAttributes[key]}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    </section>
  )
}
