import { Layout } from "./view/Layout/Layout";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";

function App() {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row h-full rounded shadow-md gap-4 p-4'>
        <div className='flex-1 md:flex-1'>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className='h-full bg-card border border-border rounded-lg p-6'>
                  <h2 className='text-xl font-semibold mb-4'>Left Content</h2>
                  <div className='space-y-4'>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Dashboard Overview</h3>
                      <p className='text-sm text-muted-foreground'>
                        Overview of your application metrics and key performance
                        indicators.
                      </p>
                    </div>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Analytics</h3>
                      <p className='text-sm text-muted-foreground'>
                        Detailed insights and data visualization for better
                        decision making.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className='h-full bg-card border border-border rounded-lg p-6'>
                  <h2 className='text-xl font-semibold mb-4'>Left Content</h2>
                  <div className='space-y-4'>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Dashboard Overview</h3>
                      <p className='text-sm text-muted-foreground'>
                        Overview of your application metrics and key performance
                        indicators.
                      </p>
                    </div>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Analytics</h3>
                      <p className='text-sm text-muted-foreground'>
                        Detailed insights and data visualization for better
                        decision making.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className='hidden md:flex md:flex-1 justify-center w-full'>
          <div className='h-full bg-card border border-border rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4'>Right Content</h2>
            <div className='space-y-4'>
              <div className='bg-muted p-4 rounded-md'>
                <h3 className='font-medium mb-2'>Settings</h3>
                <p className='text-sm text-muted-foreground'>
                  Configure your application preferences and user settings.
                </p>
              </div>
              <div className='bg-muted p-4 rounded-md'>
                <p className='text-sm font-semibold mb-4'>
                  {" "}
                  Configure your application preferences and user settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
