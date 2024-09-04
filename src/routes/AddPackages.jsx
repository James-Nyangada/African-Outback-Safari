import { Link, /* useLocation  */} from "react-router-dom"
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for the editor

import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  PlusIcon,
  Upload,
  Users2,
} from "lucide-react"

import { Badge } from "../components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Textarea } from "../components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip"
import { useState } from "react"
import imageCompression from 'browser-image-compression'

const AddPackages = () =>{
    const [images, setImages] = useState(Array(2).fill(null)); //array to hold up to 2 images
      // State to hold the table rows
    const [rows, setRows] = useState([
      { hotel: "", price: "" }, // Initial row
    ]);

      // Function to handle adding a new row
    const handleAddRow = () => {
      setRows([...rows, { hotel: "", price: "" }]); // Adds a new empty row
    };

      // Function to handle input changes
    const handleInputChange = (index, field, value) => {
      const newRows = [...rows];
      newRows[index][field] = value;
      setRows(newRows);
    };
    const [packageDetails, setPackageDetails] = useState({
        name: "",
        location: "",
        inclusions: "",
        exclusions: "",
        smalldescription: "",
        speacialnotes: "",
        offerPrice: "",
        price: "",
        destinationdescription: "",
        imageUrls: [],
        
    });

    const imagesHandler = async(e) =>{
        const files = e.target.files;
        const compressedImages = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const options = {
            maxSizeMB: 1,
            useWebWorker: true,
          };
          try{
            const compressedFile = await imageCompression(file, options);
            compressedImages.push(compressedFile);
          }catch (error){
            console.log('error compressing file', error);
          }
        }
        setImages(compressedImages);
    }

    const changeHandler = (e) =>{
        setPackageDetails({...packageDetails, [e.target.name]: e.target.value});
    }

      // Rich text editor handler
      const handleQuillChange = (value) => {
        setPackageDetails({...packageDetails, destinationdescription: value});
    }

    const Add_Package = async () => {
        console.log(packageDetails);
        const formData = new FormData();
        Array.from(images).forEach(image =>{
            formData.append('images', image);
        });

        try{
            const uploadResponse = await axios.post('https://african-outback-server.vercel.app/api/upload', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            if(uploadResponse.data.success){
                const imageUrls = uploadResponse.data.image_urls;
                const packages = { ...packageDetails, imageUrls, hotels: rows };

                console.log(packages);
                const addPackageResponse = await axios.post('https://african-outback-server.vercel.app/api/addpackages', packages);
                if(addPackageResponse.data.success){
                    alert('Package added successfully');
                }else{
                    alert('Failed to add package');
                }
            }else{
                alert('Failed to upload images');
            }
        }catch(error){
            console.log('error adding package', error);
            alert('An error occured')
        }
    }
    
  return ( 
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">African Outback safaris</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/admin-dashboard"}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/admin-dashboard/manage-booking"}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Manage Booking</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Manage Booking</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/admin-dashboard/add-packages"}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <PlusIcon className="h-5 w-5" />
                <span className="sr-only">Add Packages</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Packages</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">African Outback safaris</span>
                </Link>
                <Link
                  to={"/admin-dashboard"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to={"/admin-dashboard/manage-booking"}
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Manage Booking
                </Link>
                <Link
                  to={"/admin-dashboard/add-packages"}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <PlusIcon className="h-5 w-5" />
                  Add Packages
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={"/admin-dashboard/add-packages"}>Add Packages</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Add Packges
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                new Package
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Link to={"/admin-dashboard"}>
                <Button variant="outline" size="sm">
                  Discard
                </Button>
              </Link>
                
                <Button size="sm" onClick={Add_Package}>Save Package</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Package Overview</CardTitle>
                    <CardDescription>
                      Enter detailed Information about your package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name of Package</Label>
                        <Input
                          id="name"
                          value= {packageDetails.name}
                          onChange= {changeHandler}
                          name= "name"
                          type="text"
                          className="w-full"
                          placeholder="3 day Massai mara trip"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="location">Location of Package</Label>
                        <Input
                            id="location"
                            value= {packageDetails.location}
                            onChange= {changeHandler}
                            name= "location"
                            type="text"
                            className="w-full"
                            placeholder="Location of package"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="inclusions">Inclusions</Label>
                        <Textarea
                            id="inclusions"
                            value= {packageDetails.inclusions}
                            onChange= {changeHandler}
                            name= "inclusions"
                            placeholder="Inclusions"
                            className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="exclusions">Exclusions</Label>
                        <Textarea
                            id="exclusions"
                            value= {packageDetails.exclusions}
                            onChange= {changeHandler}
                            name= "exclusions"
                            placeholder="Exclusions"
                            className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="smalldescription">Small Description of destination</Label>
                        <Textarea
                            id="smalldescription"
                            value= {packageDetails.smalldescription}
                            onChange= {changeHandler}
                            name= "smalldescription"
                            placeholder="Small Description of destination"
                            className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Other Package Information</CardTitle>
                    <CardDescription>
                      Enter detailed Information about your package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="price">Rates and Prices</Label>
                        <Input
                            id="price"
                            value= {packageDetails.price}
                            onChange= {changeHandler}
                            name= "price"
                            type="text"
                            className="w-full"
                            placeholder="Enter the price of the package exclusive of accomodation"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="offerprice">Enter Offer Price if applies</Label>
                        <Input
                            id="offerprice"
                            value= {packageDetails.offerPrice}
                            onChange= {changeHandler}
                            name= "offerPrice"
                            type="text"
                            className="w-full"
                            placeholder="Offer Price"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="destinationdescription">Detailed Day wise Itinerary</Label>
                        <ReactQuill 
                          value={packageDetails.destinationdescription} 
                          onChange={handleQuillChange} 
                          placeholder="Enter a detailed itinerary of your package" 
                          className="" 
                        />
                      </div>
                   
    
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Hotels and Lounges</CardTitle>
                    <CardDescription>Add relevant accommodation for your package</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Hotel/Resort</TableHead>
                          <TableHead>Price Per day</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-semibold">
                              <Label htmlFor={`hotel-${index}`} className="sr-only">Hotel/Resort</Label>
                              <Input
                                id={`hotel-${index}`}
                                type="text"
                                placeholder="Hotel/Resort Namr"
                                value={row.hotel}
                                onChange={(e) => handleInputChange(index, "hotel", e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <Label htmlFor={`price-${index}`} className="sr-only">Price</Label>
                              <Input
                                id={`price-${index}`}
                                type="text"
                                placeholder="ksh: 20,000"
                                value={row.price}
                                onChange={(e) => handleInputChange(index, "price", e.target.value)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1" onClick={handleAddRow}>
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Hotel row 
                    </Button>
                  </CardFooter>
                </Card>

                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Special Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    
                      <div className="grid gap-3">
                        <Label htmlFor="destinationdescription">Special notes for the package</Label>
                        <Textarea
                            id="speacialnotes"
                            value= {packageDetails.speacialnotes}
                            onChange= {changeHandler}
                            name= "speacialnotes"
                            placeholder="Enter a detailed itinerary of your package"
                            className="min-h-32"
                        />
                      </div>
                      
                   
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Package Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">On Offer</SelectItem>
                            <SelectItem value="published">Normal</SelectItem>
                            
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Package Images</CardTitle>
                    <CardDescription>
                      Maximum of Two images to be added
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                        <button className="cusor-pointer">
                          <Input onChange= {imagesHandler} type= "file" name= 'images' id='fileinput' hidden multiple/>
                          <span className="sr-only">Upload</span>
                        </button>
                 
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Archive Product</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Archive Product
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
            <Link to={"/admin-dashboard"}>
              <Button variant="outline" size="sm">
                Discard
              </Button>
            </Link>
             
              <Button size="sm">Save Package</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default AddPackages
