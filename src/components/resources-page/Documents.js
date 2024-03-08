import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Paper } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import user from '../../services/api/user'

const rows = [
  {
    name: 'ABC of Getting any international scholarship',
    group: 'Undergraduate Scholarship ',
    visibility: 'Public',
    dateUploaded: (
      <span>
        2023-04-15 by <a href=''>Wilson Ejim</a>
      </span>
    ),
    action: <BiDotsVerticalRounded />,
    icon: <HiOutlineDocumentText />,
  },
  {
    name: 'ABCD of Getting any international scholarship',
    group: 'Undergraduate Scholarship ',
    visibility: 'Public',
    dateUploaded: (
      <span>
        2023-04-15 by <a href=''>Wilson Ejim</a>
      </span>
    ),
    action: <BiDotsVerticalRounded />,
    icon: <HiOutlineDocumentText />,
  },
]

const Documents = () => {
  const documents = useQuery({
    queryKey: ['get-documents'],
    queryFn: user.getDocuments,
  })

  console.log(documents.isSuccess)
  {
    return (
      <section className='tcontainer-wrapper'>
        <TableContainer sx={{ maxWidth: '100%' }} component={Paper}>
          <Table
            style={{ fontSize: '16px', fontWeight: 300 }}
            aria-label='a dense table'
          >
            <TableHead>
              <TableRow className='thead'>
                <TableCell className='thead' align='left'>
                  Name
                </TableCell>
                <TableCell className='thead' align='left'>
                  Group
                </TableCell>
                <TableCell className='thead' align='left'>
                  Visibility
                </TableCell>
                <TableCell className='thead' align='left'>
                  Date Uploaded
                </TableCell>
                <TableCell className='thead' align='left'>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className='tcell icon' component='th' scope='row'>
                    <p> {row.icon}</p>
                    {row.name}
                  </TableCell>
                  <TableCell className='tcell' align='left'>
                    {row.group}
                  </TableCell>
                  <TableCell className='tcell' align='left'>
                    {row.visibility}
                  </TableCell>
                  <TableCell className='tcell' align='left'>
                    {row.dateUploaded}
                  </TableCell>
                  <TableCell className='tcell' align='left'>
                    {row.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='tbtn-container'>
          <button className='btn-primary load-more'>Load More</button>
        </div>
      </section>
    )
  }
}
export default Documents
