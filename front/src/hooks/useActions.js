export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
         bindActionCreators(actions, dispatch), [dispatch])
}