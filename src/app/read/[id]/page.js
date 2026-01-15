export default async function Read({params}) {
  const {id} = await params;
  console.log('Read 페이지 실행');
  return (
    <>
      <h2>Read</h2>
      Parameter:{id}
    </>
  );
}