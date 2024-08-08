const gameComponents = [
    {
      id: 1,
      title: "Button Component",
      code: `<button onClick={handleClick}>Click Me</button>`,
      time: 15, 
    },
    {
      id: 2,
      title: "Input Component",
      code: `<input type="text" placeholder="Enter Text" onChange={handleChange} />`,
      time: 15,
    },
    {
      id: 3,
      title: "Toggle Switch Component",
      code: `<Button variant="text">Text</Button`,
      time: 15,
    },
    {
        id: 4,
        title: "Simple Counter Component",
        code: `<Button variant="contained">Contained</Button>`,
        time: 15,
    },
    {
        id: 5,
        title: "User Profile Component",
        code: `<Button variant="outlined">Outlined</Button>`,
        time: 15,
    },
    {
        id: 6,
        title: "Todo Item Component",
        code: `<Checkbox {...label} defaultChecked />`,
        time: 15,
    },
    {
        id: 7,
        title: "Modal Component",
        code: `<Checkbox {...label} disabled checked />`,
        time: 15,
    },
    {
        id: 8,
        title: "Navigation Bar Component",
        code: `<Checkbox {...label} defaultChecked color="default" />`,
        time: 15,
    },
    {
        id: 9,
        title: "Accordion Component",
        code: `<Fab color="primary" aria-label="add"><AddIcon /></Fab>`,
        time: 15,
    },
    {
        id: 10,
        title: "Simple Slider Component",
        code: `<Fab size="small" color="secondary" aria-label="add"><AddIcon /></Fab>`,
        time: 15,
    },
    {
        id: 11,
        title: "Tab Component",
        code: `<RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">`,
        time: 15,
    },
    {
        id: 12,
        title: "Search Input Component",
        code: `<Rating name="simple-controlled" value={value} onChange={(event, newValue) => {}} />`,
        time: 15,
    },
    {
        id: 13,
        title: "Dark Mode Toggle",
        code: `<Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>`,
        time: 15,
    },
    {
        id: 14,
        title: "Notification Badge",
        code: `<Slider disabled defaultValue={30} aria-label="Disabled slider" />`,
        time: 15,
    },
    {
        id: 15,
        title: "Breadcrumb Navigation",
        code: `<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />`,
        time: 15,
    },
    {
        id: 16,
        title: "Card Component",
        code: `<Slider defaultValue={30} step={10} marks min={10} max={110} disabled />`,
        time: 15,
    },
    {
        id: 17,
        title: "Loading Spinner",
        code: `<Switch {...label} defaultChecked />`,
        time: 15,
    },
    {
        id: 18,
        title: "Dialog Box",
        code: `<FormControlLabel disabled control={<Switch />} label="Disabled" />`,
        time: 15,
    },
    {
        id: 19,
        title: "Image Gallery",
        code: `<PinkSwitch {...label} defaultChecked />`,
        time: 15,
    },
    {
        id: 20,
        title: "Progress Bar",
        code: `<TextField id="outlined-basic" label="Outlined" variant="outlined" />`,
        time: 15,
    },
    {
        id: 21,
        title: "Tooltip Component",
        code: `<TextField id="standard-basic" label="Standard" variant="standard" />`,
        time: 15,
    },
    {
        id: 22,
        title: "Pagination Component",
        code: `<ToggleButtonGroup size="small" {...control} aria-label="Small sizes"> {children} </ToggleButtonGroup>`,
        time: 15,
    },
    {
        id: 23,
        title: "Multi-Step Form Component",
        code: `<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />`,
        time: 15,
    },
    {
        id: 24,
        title: "Carousel Component",
        code: `<Avatar {...stringAvatar('Tim Neutkens')} />`,
        time: 15,
    },
    {
        id: 25,
        title: "FAQ Accordion",
        code: `<Chip label="Chip Outlined" variant="outlined" />`,
        time: 15,
    },
    {
        id: 26,
        title: "Simple Blog Post",
        code: `<Chip label="Deletable" variant="outlined" onDelete={handleDelete} />`,
        time: 15,
    },
    {
        id: 27,
        title: "User Card with Context",
        code: `import Divider from '@mui/material/Divider';`,
        time: 15,
    },
    {
        id: 28,
        title: "Custom Hook for Fetching Data",
        code: `<Divider orientation="vertical" flexItem />`,
        time: 15,
    },
    {
        id: 29,
        title: "Responsive Navbar",
        code: `npm install @mui/icons-material`,
        time: 15,
    },
    {
        id: 30,
        title: "Theme Switcher using Context",
        code: `import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';`,
        time: 15,
    },
    {
        id: 31,
        title: "Chat Message Component",
        code: `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`,
        time: 15,
    },
    {
        id: 32,
        title: "Weather Widget with API Call",
        code: `<ListItemButton component="a" href="#simple-list"><ListItemText primary="Spam" /></ListItemButton>`,
        time: 15,
    },
    {
        id: 33,
        title: "Infinite Scroll List",
        code: `<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />`,
        time: 15,
    },
    {
        id: 34,
        title: "Dashboard Layout with Grid",
        code: `<Tooltip title="Add" arrow><Button>Arrow</Button></Tooltip>`,
        time: 15,
    },
    {
        id: 35,
        title: "Collapsible Sidebar",
        code: `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
        time: 15,
    },
    {
        id: 36,
        title: "Sortable Table",
        code: `<Div>{"This div's text looks like that of a button."}</Div>`,
        time: 15,
    },
    {
        id: 37,
        title: "File Upload Component",
        code: `<Typography variant="h1" component="h2">h1. Heading</Typography>`,
        time: 15,
    },
    {
        id: 38,
        title: "Multi-Select Dropdown",
        code: `<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Here is a gentle confirmation that your action was successful.</Alert>`,
        time: 15,
    },
    {
        id: 39,
        title: "React Router - Basic Navigation",
        code: `<Alert severity="success">This is a success Alert.</Alert>`,
        time: 15,
    },
    {
        id: 40,
        title: "Dynamic Form Fields",
        code: `<Alert severity="info"><AlertTitle>Info</AlertTitle>This is an info Alert with an informative title.</Alert>`,
        time: 15,
    },
    {
        id: 41,
        title: "Context API Provider and Consumer",
        code: `<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />`,
        time: 15,
    },
    {
        id: 42,
        title: "Custom Middleware with Hooks",
        code: `<CircularProgress variant="determinate" value={progress} />`,
        time: 15,
    },
    {
        id: 43,
        title: "Drag and Drop Interface",
        code: `<LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />`,
        time: 15,
    },
    {
        id: 44,
        title: "Data Visualization with Charts",
        code: `<Skeleton variant="rounded" width={210} height={60} />`,
        time: 15,
    },
    {
        id: 45,
        title: "Password Strength Meter",
        code: `<Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} message="I love snacks" key={vertical + horizontal} />`,
        time: 15,
    },
    {
        id: 46,
        title: "Real-time Search Filter",
        code: `<AppBar position="static" color="primary"> {appBarLabel('default')} </AppBar>`,
        time: 15,
    },
    {
        id: 47,
        title: "Card",
        code: `<Card variant="outlined">{card}</Card>`,
        time: 15,
    },
    {
        id: 48,
        title: "Demopaper",
        code: `<DemoPaper variant="outlined">outlined variant</DemoPaper> <DemoPaper square={false}>rounded corners</DemoPaper>`,
        time: 15,
    },
    {
        id: 49,
        title: "Drawer",
        code: `<Drawer open={open} onClose={toggleDrawer(false)}> {DrawerList} </Drawer>`,
        time: 15,
    },
    {
        id: 50,
        title: "Treeview",
        code: `<TreeView aria-label="file system navigator" defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}><TreeItem nodeId="1" label="Applications"><TreeItem nodeId="2" label="Calendar" /></TreeItem><TreeItem nodeId="5" label="Documents"><TreeItem nodeId="10" label="OSS" /><TreeItem nodeId="6" label="MUI"><TreeItem nodeId="8" label="index.js" /></TreeItem></TreeItem></TreeView>`,
        time: 15,
    },
    
    
  ];
  
  export default gameComponents;
  