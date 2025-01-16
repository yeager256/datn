import { Spinner } from '@material-tailwind/react'

type props={
  className?:string
}
function Loading({className}:props) {
  return (
    <div className={"flex justify-center py-8 w-full "+className}>
        <Spinner className="h-12 w-12" color="blue"  />
      </div>
  )
}

export default Loading