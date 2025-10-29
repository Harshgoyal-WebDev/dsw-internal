import { Checkbox } from '@/components/ui/motion-checkbox'
import { Label } from '@/components/ui/label'

const CheckboxAnimatedDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id="checkbox-17" defaultChecked />
      <Label htmlFor="checkbox-17">Animated checkbox</Label>
    </div>
  );
}

export default CheckboxAnimatedDemo
