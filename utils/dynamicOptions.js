const getStatusColor = (orderStatus) => {
    let statusColor = ''
    switch (orderStatus) {
      case 'accent':
        statusColor = 'bg-colors-accent text-colors-white'
        break
      case 'white':
        statusColor = 'bg-colors-white text-colors-font'
        break
      case 'primary':
        statusColor = 'bg-colors-primary text-colors-white'
        break
      case 'grey':
        statusColor = 'bg-colors-grey text-colors-font'
        break
    }
    return statusColor
  }
  const getSectionPadding =(statusHeight) =>{
      let paddingHeight = ''
      switch (statusHeight) {
          case 'large':
              paddingHeight = "py-20"
              break
          case 'small':
              paddingHeight = "py-10"
              break
          case 'none' :
              paddingHeight = "py-0"
              break
      }
      return paddingHeight
  
  }
  
  const getButtonColor =(statusButton) =>{
    let buttonColor = ''
    switch (statusButton) {
      case 'accent':
        buttonColor = 'btn-accent'
        break
      case 'primary':
        buttonColor = 'btn-primary'
        break
      case 'outline':
        buttonColor = 'btn-outline'
        break
        case 'white':
        buttonColor = 'btn-white'
        break
    }
    return buttonColor
  
  }
  
  export { getStatusColor }
  export { getSectionPadding }
  export { getButtonColor }