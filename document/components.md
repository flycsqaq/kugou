# 1. 数据列表组件
## 1.1 展示接口
```
interface Props {
  data: any[]
  start: number
}
```
## 1.2 分页接口
```
interface Props {
  back: number
  next: number
  open: boolean
  close: boolean
}
function method: () => {start}
```
## 1.3 中间件
### 1.3.1 功能
1. 根据媒体查询分发数据
2. 接口分页器的事件改变start
### 1.3.2 props
```
interface Props {
  data: any[]
  type: 'songs' | 'menus' | 'classes' | 'singers'
  row: number
  actions: {
    changeRow: () => void
  }
}
```
### 1.3.3 state
```
mediaQuery = {
  songs,
  menus,
  classes,
  singers
}
```
### methods
```
const [start, setStart] = useState(0)
const [dataShow, setDataShow] = useState([])
```
### hooks
```
useEffect(
  () => {
    const num = mediaQuery * row
    setDataShow(props.data.slice(start, start + num))
  }, [props.row]
)
```