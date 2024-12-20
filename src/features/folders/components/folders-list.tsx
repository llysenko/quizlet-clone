export default function FoldersList() {
  const folders = [
    {
      id: 1,
      title: 'Folder#1'
    }
  ];
  return <ul>{folders && folders.map(folder => <li key={folder.id}>{folder.title}</li>)}</ul>;
}
